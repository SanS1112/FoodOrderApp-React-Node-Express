export default function Head({open, Cart}){
    return (
      <div className="head">
        <h1> Chotiwaalaa's</h1>
        <nav>
          <p className="pointer" onClick={() => open()}>Cart({Cart})</p>
        </nav>
      </div>
    );
}