import Link from 'next/link'

export function SiteFooter() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
                <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] items-start">
                    <div>
                                  <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              LearnAI®
            </span>
          </Link>
                        <p className="text-sm text-muted-foreground max-w-md">
                            A focused learning workspace for AI and web3 builders. Track your progress, stay consistent, and ship skills that matter.
                        </p>
                    </div>

                    <div className="space-y-3 text-sm">
                        <p className="font-semibold text-foreground">Product</p>
                        <div className="space-y-2 text-muted-foreground flex flex-col">
                            <Link href="/dashboard" className="hover:text-foreground transition-colors">
                                Dashboard
                            </Link>
                            <Link href="/courses" className="hover:text-foreground transition-colors">
                                Courses
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm">
                        <p className="font-semibold text-foreground">Company</p>
                        <div className="space-y-2 text-muted-foreground">
                            <span className="block">About</span>
                            <span className="block">Careers</span>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm">
                        <p className="font-semibold text-foreground">Resources</p>
                        <div className="space-y-2 text-muted-foreground">
                            <span className="block">Help center</span>
                            <span className="block">Community</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                    <p>© {year} LearnAI. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <button className="hover:text-foreground transition-colors">Privacy</button>
                        <button className="hover:text-foreground transition-colors">Terms</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
