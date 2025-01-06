'use client'
import { usePathname } from "next/navigation";

export default function AppFooter() {
  const pathName = usePathname();
  return (
    <div className={`${pathName !== '/login' && pathName !== '/register' ? '' : 'hidden'}`}>
      <span>app footer</span>
    </div>
  );
}