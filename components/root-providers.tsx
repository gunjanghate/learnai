"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/user-provider";
import { Analytics } from "@vercel/analytics/next";

interface RootProvidersProps {
    children: ReactNode;
}

export function RootProviders({ children }: RootProvidersProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <AuthProvider>
                {children}
                <Analytics />
            </AuthProvider>
        </ThemeProvider>
    );
}
