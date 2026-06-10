import NavBar from "./NavBar";

type User = {
    name: string,
    email: string
}

type HeaderProps = {
    user: User
}

const Header = ({ user }: HeaderProps) => {

  return (
    <div>
      <h1>Guvi - React</h1>
      <NavBar />
      <p>Welcome { user.email }! <button>Logout</button></p>
    </div>
  )
}

export default Header;