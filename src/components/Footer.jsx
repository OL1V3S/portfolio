export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Oliver Triana <span>© {new Date().getFullYear()}</span></p>
        <p className="footer-status"><span className="status-dot" aria-hidden="true"></span> Omaha, Nebraska · Building with React + Vite</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
