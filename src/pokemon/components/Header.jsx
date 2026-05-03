import "../../styles/Header.css";

export default function Header() {
  return (
    <nav>
      <h1>What Pokemon <br/>are you looking for?</h1>
      <form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={'20px'}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input type="text" placeholder="Search..." />
      </form>
    </nav>
  );
}
