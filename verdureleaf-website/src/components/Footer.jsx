import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary py-16">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="font-headline text-lg font-semibold mb-2 text-on-primary">
            VerdureLeaf India
          </h4>
          <p className="text-sm text-primary-fixed-dim">
            123 Green Valley, Farm Road
            <br />
            Bangalore, Karnataka 560001
          </p>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold mb-2 text-on-primary">
            VerdureLeaf UAE
          </h4>
          <p className="text-sm text-primary-fixed-dim">
            Suite 404, Oasis Tower
            <br />
            Sheikh Zayed Road, Dubai
          </p>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold mb-2 text-on-primary">
            Connect
          </h4>
          <div className="flex gap-4 mb-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed-dim transition-colors">
              globe
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed-dim transition-colors">
              share
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary-fixed-dim transition-colors">
              mail
            </span>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/" className="text-primary-fixed-dim hover:text-on-primary transition-colors">Home</Link>
            <Link to="/about" className="text-primary-fixed-dim hover:text-on-primary transition-colors">About</Link>
            <Link to="/shop" className="text-primary-fixed-dim hover:text-on-primary transition-colors">Shop</Link>
            <Link to="/contact" className="text-primary-fixed-dim hover:text-on-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-4 border-t border-primary-container text-center text-sm text-primary-fixed-dim">
        © 2024 VerdureLeaf. All rights reserved.
      </div>
    </footer>
  );
}
