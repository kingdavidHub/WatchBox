import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <p className="uppercase font-semibold">WATCH BOX</p>
          {/* <Image src={"/logo.png"} alt="logo" width={144} height={30} /> */}
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>

              {/* Action is a server component prop */}
              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <button type="button">
                <Link href={"/signin"}>SignIn</Link>
              </button>
              <button type="button">
                <Link href={"/signup"}>SignUp</Link>
              </button>
            
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
