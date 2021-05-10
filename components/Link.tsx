import Link from 'next/link'

export interface LinkProps {
  href: string,
  children: any,
}

const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
  return <Link href={href} as={href}>{children}</Link>;
}

export default CustomLink;