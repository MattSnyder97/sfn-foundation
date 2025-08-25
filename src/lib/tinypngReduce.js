// node src/lib/tinypngReduce.js

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });

const TINYPNG_API_KEY = "6ZQqPSstkW0qyz7nkqmk6V9cZJmC8PhY";
const imagesDir = path.join(__dirname, "../../public/images");

// List subfolders
const subfolders = fs.readdirSync(imagesDir).filter(f => fs.statSync(path.join(imagesDir, f)).isDirectory());
if (subfolders.length === 0) {
  console.log("No subfolders found in /public/images/");
  process.exit(1);
}

console.log("Subfolders in /public/images/:");
subfolders.forEach((folder, idx) => {
  console.log(`${idx + 1}: ${folder}`);
});
const choice = prompt("Enter the number of the subfolder to compress: ");
const selected = subfolders[parseInt(choice) - 1];
if (!selected) {
  console.log("Invalid selection.");
  process.exit(1);
}

const targetDir = path.join(imagesDir, selected);
const files = fs.readdirSync(targetDir).filter(f => {
  const filePath = path.join(targetDir, f);
  const isImage = /\.(png|jpg|jpeg)$/i.test(f); // Now includes .jpeg
  if (!isImage) return false;
  const stats = fs.statSync(filePath);
  return stats.size >= 600 * 1024; // Only include files >= 600kb
});

if (files.length === 0) {
  console.log("No compressable files (less than 600kb) found in selected folder.");
  process.exit(1);
}

console.log(`Compressing ${files.length} images in ${selected}...`);

async function compressImage(filePath) {
  const fileData = fs.readFileSync(filePath);
  try {
    // Upload to TinyPNG
    const uploadRes = await axios.post(
      "https://api.tinify.com/shrink",
      fileData,
      {
        auth: { username: "api", password: TINYPNG_API_KEY },
        headers: { "Content-Type": "application/octet-stream" }
      }
    );
    const compressedUrl = uploadRes.data.output.url;
    // Download compressed image
    const compressedRes = await axios.get(compressedUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(filePath, compressedRes.data);
    console.log(`Compressed: ${path.basename(filePath)}`);
  } catch (err) {
    console.error(`Error compressing ${path.basename(filePath)}:`, err.response ? err.response.data : err.message);
  }
}

(async () => {
  for (const file of files) {
    await compressImage(path.join(targetDir, file));
  }
  console.log("Compression complete.");
})();