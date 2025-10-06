"use client";
import React from "react";
import InfoHero from '@/components/content/info/InfoHero';

export default function PortalClient() {
  // Temporary: Under construction gate (remove this return when ready)
  return (
    <div
      className="bg-offWhite flex flex-col items-center justify-start sm:justify-center py-12 px-4 w-full"
      data-skip-target="true"
      tabIndex={-1}
    >
      <div className="max-w-prose text-center space-y-4">
        <h2 className="text-3xl font-semibold text-primary">Research Portal in Development</h2>
        <p className="text-gray">
          Please check back soon.
        </p>
      </div>
    </div>
  );

  // const { data: session, status } = useSession();
  // const isSignedIn = status === 'authenticated' && Boolean(session && session.user && (session.user.email || session.user.id));

  // // CHANGED: coerce role to string and accept both "Researcher" and legacy "Specialist"
  // const role = session?.user?.role as string | undefined;
  // const isResearcher = role === 'Researcher' || role === 'Specialist';

  // const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  // useEffect(() => {
  //   if (session && session.user && !isResearcher) {
  //     const sentKey = `access-request-sent-${session.user.email}`;
  //     if (!window.localStorage.getItem(sentKey)) {
  //       fetch('/api/request-access', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ userEmail: session.user.email }),
  //       });
  //       window.localStorage.setItem(sentKey, 'true');
  //     }
  //   }
  // }, [session, isResearcher]);

  // useEffect(() => {
  //   // If the signed-in user is a researcher, always enable researcher mode and persist it.
  //   // Run this effect when session/isResearcher changes so signing in updates the view immediately.
  //   if (isResearcher) {
  //     try {
  //       setHasAccess(true);
  //       localStorage.setItem("portalAccess", "researcher");
  //     } catch {
  //       setHasAccess(true);
  //     }
  //     return;
  //   }

  //   // priority: URL ?access=researcher|public -> localStorage -> default public
  //   try {
  //     const params = new URLSearchParams(window.location.search);
  //     const q = params.get("access");
  //     if (q === "researcher") {
  //       setHasAccess(true);
  //       localStorage.setItem("portalAccess", "researcher");
  //       return;
  //     }
  //     if (q === "public") {
  //       setHasAccess(false);
  //       localStorage.setItem("portalAccess", "public");
  //       return;
  //     }
  //   } catch {
  //     // ignore parsing errors
  //   }

  //   const saved = typeof window !== "undefined" ? localStorage.getItem("portalAccess") : null;
  //   if (saved === "researcher") setHasAccess(true);
  //   else if (saved === "public") setHasAccess(false);
  //   else setHasAccess(false);
  // }, [isResearcher]);

  // function setResearcher() {
  //   localStorage.setItem("portalAccess", "researcher");
  //   setHasAccess(true);
  // }
  // function setPublic() {
  //   localStorage.setItem("portalAccess", "public");
  //   setHasAccess(false);
  // }

  // if (status === 'loading') {
  //   return (
  //     <div role="main" data-skip-target="true" tabIndex={-1} className="flex-1 flex items-center justify-center">
  //       <div role="status" aria-label="Loading" className="flex items-center justify-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
  //         <span className="sr-only">Loading</span>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className={`bg-offWhite flex flex-col items-start sm:items-center justify-start sm:justify-center py-0 ${isSignedIn && isResearcher ? 'sm:py-0' : 'sm:py-12'} px-0 w-full relative`} data-skip-target="true" tabIndex={-1}>
  //     {/* Sign out button in top-right when signed in */}
  //     {isSignedIn && (
  //       <div className="absolute top-4 right-4 z-50">
  //         <Button
  //           variant="outline"
  //           size="sm"
  //           onClick={() => signOut({ callbackUrl: '/' })}
  //         >
  //           Sign out
  //         </Button>
  //       </div>
  //     )}
  //     {/* Researcher: show hero and portal content inside card */}
  //     {isSignedIn && isResearcher ? (
  //       <>
  //         <div className="w-full mb-6">
  //           <InfoHero title="Research Portal" />
  //         </div>
  //         {session?.user?.name && (
  //           <h2 className="text-xl font-semibold mb-6 text-primary">{getGreeting()}, {session.user.name}!</h2>
  //         )}
  //         <p>You are approved to upload the latest research.</p>
  //       </>
  //     ) : (
  //       // Not signed in or signed in without researcher role
  //       !isSignedIn ? (
  //         <ActionCard
  //           embedded
  //           topLogoBanner={true}
  //           actions={<div className="mt-4"><EmailSignInButton /></div>}
  //         />
  //       ) : (
  //         <ActionCard
  //           embedded
  //           title={<div className="text-gray flex items-center justify-center"><FiLock className="mr-2" size={28} /><span className="text-2xl font-bold">Access Restricted</span></div>}
  //         />
  //       )
  //     )}

  //     {/* Only render the mode controls / views once hasAccess is resolved */}
  //     {hasAccess === null ? (
  //       <div className="p-6">
  //         <div role="status" aria-label="Loading portal view" className="flex items-center gap-3">
  //           <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
  //           <span className="text-sm text-gray-600">Loading portal view...</span>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="p-6">
  //         <div className="mb-4 flex items-center gap-3">
  //           <span className="text-sm text-gray-600">Current mode:</span>
  //           <strong>{hasAccess ? "Researcher" : "Public"}</strong>
  //           <div className="ml-auto flex gap-2">
  //             <button onClick={setPublic} className="px-3 py-1 rounded border">Public</button>
  //             <button onClick={setResearcher} className="px-3 py-1 rounded border">Researcher</button>
  //           </div>
  //         </div>

  //         {hasAccess ? <PortalResearcherView /> : <PortalPublicView />}
  //       </div>
  //     )}
  //   </div>
  // );
}
