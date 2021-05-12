import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { TButton } from '../../components/Button';
import { useTheme } from 'react-jss';
import { ITheme } from '../../styles/theme';
import Panel from '../../components/Admin/Panel';

const Admin: React.FC = () => {
  const [session] = useSession()
  const theme: ITheme = useTheme()
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  var ALLOWED_ADMINS: string[] = ["yunisdev.04@gmail.com","sevillerasulova@gmail.com"]

  return (
    <>
      {!session && <>
        <TButton onClick={() => signIn("github")} text="Sign In" theme={theme} />
      </>}
      {session && ALLOWED_ADMINS.includes(session.user.email) && <Panel user={session.user} signOut={signOut} />}
      {session && !ALLOWED_ADMINS.includes(session.user.email) && signOut()}
    </>
  );
}

export default Admin;