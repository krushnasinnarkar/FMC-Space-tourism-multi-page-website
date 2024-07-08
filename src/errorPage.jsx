export default function ErrorPage() {
    const divStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        color:"white"
    }
  return (
    <div style={divStyle}>
      <h1 className="font-serif">404 Not Found</h1>
    </div>
  );
}
