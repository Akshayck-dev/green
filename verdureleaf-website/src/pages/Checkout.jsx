import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const FREE_SHIPPING_THRESHOLD = 500;

export default function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Jis Maria',
    phone: '8075931749',
    email: 'jismariajl@gmail.com',
    houseName: 'Neduvelil H',
    locality: 'Mutholapuram P.O, Elanji',
    city: 'Ernakulam',
    state: 'Kerala',
    pincode: '686665',
    paymentMethod: 'cod', // cod | upi | card
    deliveryNotes: 'Harvest morning fresh delivery requested.',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(null);

  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 60;
  const grandTotal = subtotal + shippingFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.houseName || !formData.city) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    const orderId = `CG-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      items: [...cartItems],
      subtotal,
      shippingFee,
      grandTotal,
      customer: { ...formData },
    };

    setOrderConfirmed(newOrder);
    clearCart();
  };

  if (orderConfirmed) {
    const waText = encodeURIComponent(
      `Hello Caeris Greens! Order #${orderConfirmed.orderId} placed.\nCustomer: ${orderConfirmed.customer.fullName}\nPhone: ${orderConfirmed.customer.phone}\nItems: ${orderConfirmed.items
        .map((i) => `${i.quantity}x ${i.product.name} (${i.option})`)
        .join(', ')}\nTotal: ₹${orderConfirmed.grandTotal}\nAddress: ${orderConfirmed.customer.houseName}, ${orderConfirmed.customer.locality}, ${orderConfirmed.customer.city}, ${orderConfirmed.customer.state} - ${orderConfirmed.customer.pincode}`
    );

    return (
      <div className="min-h-screen bg-surface py-12 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-2xl border border-outline-variant/30 text-center flex flex-col items-center gap-6 animate-scale-up">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-primary flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-[48px]">check_circle</span>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary-fixed/30 px-3 py-1 rounded-full">
              Harvest Scheduled
            </span>
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">
              Order Confirmed!
            </h1>
            <p className="text-sm text-on-surface-variant mt-1">
              Order ID: <strong className="text-on-surface">{orderConfirmed.orderId}</strong>
            </p>
          </div>

          {/* Delivery & Customer Summary */}
          <div className="w-full bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 text-left flex flex-col gap-4">
            <h3 className="font-headline font-bold text-base text-on-surface border-b border-outline-variant/30 pb-2">
              Delivery & Order Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-on-surface-variant font-medium block">Customer Name</span>
                <strong className="text-on-surface text-sm">{orderConfirmed.customer.fullName}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant font-medium block">Contact Phone</span>
                <strong className="text-on-surface text-sm">{orderConfirmed.customer.phone}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant font-medium block">Email Address</span>
                <strong className="text-on-surface text-sm">{orderConfirmed.customer.email}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant font-medium block">Payment Method</span>
                <strong className="text-on-surface text-sm uppercase">
                  {orderConfirmed.customer.paymentMethod === 'cod'
                    ? 'Cash on Delivery'
                    : orderConfirmed.customer.paymentMethod === 'upi'
                    ? 'UPI Instant Pay'
                    : 'Card / NetBanking'}
                </strong>
              </div>
            </div>

            <div className="border-t border-outline-variant/30 pt-3 flex flex-col gap-1 text-xs">
              <span className="text-on-surface-variant font-medium">Delivery Address</span>
              <p className="text-on-surface font-semibold">
                {orderConfirmed.customer.houseName}, {orderConfirmed.customer.locality}, {orderConfirmed.customer.city}, {orderConfirmed.customer.state} — {orderConfirmed.customer.pincode}
              </p>
            </div>

            {/* Order Items */}
            <div className="border-t border-outline-variant/30 pt-3 flex flex-col gap-2">
              <span className="text-on-surface-variant font-medium text-xs">Items Ordered ({orderConfirmed.items.length})</span>
              {orderConfirmed.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs">
                  <span className="text-on-surface font-semibold">
                    {item.quantity}x {item.product.name} ({item.option})
                  </span>
                  <span className="text-primary font-bold">
                    ₹{(item.product.price + (item.option.includes('Live Growth') ? 80 : 0)) * item.quantity}
                  </span>
                </div>
              ))}
              <div className="border-t border-outline-variant/20 pt-2 flex justify-between font-headline font-bold text-sm text-primary">
                <span>Total Paid</span>
                <span>₹{orderConfirmed.grandTotal}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/918075931749?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-full font-body text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Confirm Order on WhatsApp</span>
            </a>
            <button
              onClick={() => navigate('/shop')}
              className="flex-1 bg-surface-container border border-outline-variant/40 text-on-surface hover:bg-surface-container-high py-3.5 rounded-full font-body text-xs font-bold transition-all"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] bg-surface py-16 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-primary-fixed/30 text-primary flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[40px]">shopping_bag</span>
        </div>
        <h2 className="font-headline text-3xl font-bold text-primary mb-2">Your Bag is Empty</h2>
        <p className="text-sm text-on-surface-variant max-w-md mb-6">
          Add fresh microgreens to your harvest bag before proceeding to checkout.
        </p>
        <Link
          to="/shop"
          className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-body text-sm font-semibold hover:bg-primary-container transition-all shadow-md"
        >
          Browse Microgreens
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Checkout</span>
        </div>

        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">
          Checkout & Shipping Details
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Side (7 cols) */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-7 flex flex-col gap-8">
            {/* Customer Contact Details */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2 border-b border-outline-variant/20 pb-3">
                <span className="material-symbols-outlined text-primary text-[22px]">person</span>
                1. Customer & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2 border-b border-outline-variant/20 pb-3">
                <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                2. Harvest Delivery Address
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    House / Building Name / Flat No. *
                  </label>
                  <input
                    type="text"
                    name="houseName"
                    required
                    value={formData.houseName}
                    onChange={handleChange}
                    placeholder="e.g. Neduvelil H"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Street, Area & Post Office *
                  </label>
                  <input
                    type="text"
                    name="locality"
                    required
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="e.g. Mutholapuram P.O, Elanji"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    City / District *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Ernakulam"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Kerala"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="686665"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold text-on-surface uppercase tracking-wider">
                    Delivery Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    name="deliveryNotes"
                    value={formData.deliveryNotes}
                    onChange={handleChange}
                    placeholder="e.g. Leave at doorstep, call before arrival"
                    className="w-full bg-surface p-3 rounded-xl border border-outline-variant/40 text-sm font-medium text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold text-on-surface flex items-center gap-2 border-b border-outline-variant/20 pb-3">
                <span className="material-symbols-outlined text-primary text-[22px]">payments</span>
                3. Select Payment Method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when delivered', icon: 'local_atm' },
                  { id: 'upi', label: 'UPI / QR Code', desc: 'GPay / PhonePe / Paytm', icon: 'qr_code_scanner' },
                  { id: 'card', label: 'NetBanking / Card', desc: 'Debit / Credit Cards', icon: 'credit_card' },
                ].map((pay) => (
                  <button
                    type="button"
                    key={pay.id}
                    onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: pay.id }))}
                    className={`p-4 rounded-xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                      formData.paymentMethod === pay.id
                        ? 'border-primary bg-primary-container/10 text-primary ring-2 ring-primary/40'
                        : 'border-outline-variant/40 bg-surface hover:bg-surface-container-low text-on-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-primary text-xl">
                        {pay.icon}
                      </span>
                      <span className="material-symbols-outlined text-base">
                        {formData.paymentMethod === pay.id
                          ? 'radio_button_checked'
                          : 'radio_button_unchecked'}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-xs block">{pay.label}</span>
                      <span className="text-[11px] text-on-surface-variant block">{pay.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-on-tertiary h-14 rounded-full font-body text-base font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(224,122,95,0.3)] hover:opacity-95 hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">check_circle</span>
              <span>Confirm & Place Harvest Order — ₹{grandTotal}</span>
            </button>
          </form>

          {/* Selected Products Order Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-6 lg:sticky lg:top-28">
            <h3 className="font-headline text-lg font-bold text-primary flex items-center justify-between border-b border-outline-variant/20 pb-3">
              <span>Selected Products ({cartItems.length})</span>
              <Link to="/shop" className="text-xs font-semibold text-secondary hover:underline">
                Add Items
              </Link>
            </h3>

            {/* Selected Items */}
            <div className="flex flex-col gap-3.5 max-h-[380px] overflow-y-auto pr-1">
              {cartItems.map((item) => {
                const itemPrice = item.product.price + (item.option.includes('Live Growth') ? 80 : 0);
                return (
                  <div
                    key={`${item.id}-${item.option}`}
                    className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-outline-variant/20 shadow-xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 rounded-lg object-cover bg-surface-container flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col">
                      <h5 className="font-headline text-xs font-bold text-on-surface truncate">
                        {item.product.name}
                      </h5>
                      <span className="text-[10px] text-secondary font-semibold uppercase">
                        {item.option}
                      </span>
                      <span className="text-xs text-on-surface-variant mt-0.5">
                        Qty: {item.quantity} × ₹{itemPrice}
                      </span>
                    </div>
                    <span className="font-headline font-bold text-sm text-primary flex-shrink-0">
                      ₹{itemPrice * item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Price Calculations */}
            <div className="border-t border-outline-variant/30 pt-4 flex flex-col gap-2.5 text-xs text-on-surface">
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-medium">Subtotal</span>
                <span className="font-bold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant font-medium">Harvest Shipping</span>
                <span className="font-bold">
                  {shippingFee === 0 ? (
                    <strong className="text-secondary uppercase">FREE</strong>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>

              <div className="border-t border-outline-variant/30 pt-3 flex justify-between font-headline font-bold text-base text-primary">
                <span>Grand Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl text-xs flex items-center gap-3 border border-emerald-200">
              <span className="material-symbols-outlined text-emerald-700 text-[20px]">
                local_shipping
              </span>
              <span>Fresh cold-chain delivery harvested on order day.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
