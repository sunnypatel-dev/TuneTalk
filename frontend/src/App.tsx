
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/cgitlerk-react";

function App() {

  return (
    <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
  )
}

export default App
