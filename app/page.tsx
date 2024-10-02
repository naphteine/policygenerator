import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mx-10 my-10">
        <h1 className="text-4xl font-bold text-center">PolicyMaker</h1>
        <p className="text-center my-10 max-w-xl mx-auto">
          <b>Warning:</b> Use the templates this app provides as a starting
          point. Any product, generated policy, TOS is not legal advice. If
          you're a lawyer, we're open for improvements.
        </p>
      </header>

      <main className="flex">
        <div className="mx-auto grid w-full max-w-sm items-center gap-5">
          <Label htmlFor="com">Company name</Label>
          <Input id="com" type="text" placeholder="Acme Corporation" />
          <Label htmlFor="siteurl">Website</Label>
          <Input id="siteurl" type="text" placeholder="example.com" />
          <Label htmlFor="contact">Contact E-Mail</Label>
          <Input
            id="contact"
            type="text"
            placeholder="me@example.com"
            required
          />
          <Button>Generate</Button>
        </div>
      </main>

      <footer className="text-center my-10 text-sm text-muted-foreground">
        <p>
          Created by{" "}
          <Link className="underline" href="https://gokay.works">
            gokay.works
          </Link>
        </p>
        <p>
          Source code can be found on{" "}
          <Link
            className="underline"
            href="https://github.com/naphteine/policymaker"
          >
            GitHub
          </Link>
        </p>
      </footer>
    </>
  );
}
