import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-border bg-card mt-auto border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-medium">Browse</h4>
            <div className="text-muted-foreground flex flex-col gap-2">
              <Link
                href="/listings?type=rent"
                className="hover:text-foreground"
              >
                Rent
              </Link>
              <Link href="/listings?type=buy" className="hover:text-foreground">
                Buy
              </Link>
              <Link href="/agents" className="hover:text-foreground">
                Agents
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-medium">List</h4>
            <div className="text-muted-foreground flex flex-col gap-2">
              <Link href="/upload" className="hover:text-foreground">
                Add Property
              </Link>
              <Link href="/register" className="hover:text-foreground">
                Register
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Areas</h4>
            <div className="text-muted-foreground flex flex-col gap-2">
              <span>Wuse</span>
              <span>Maitama</span>
              <span>Garki</span>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Support</h4>
            <div className="text-muted-foreground flex flex-col gap-2">
              <span>Help Center</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="border-border text-muted-foreground mt-6 border-t pt-6 text-center text-xs">
          Domora
        </div>
      </div>
    </footer>
  );
}
