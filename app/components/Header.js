import React from "react";
import "../styles/Header.module.css";
import Link from "next/link";

const Header = ({ id, name }) => (
  <div className="header">
    <Link href={`/product/${id}/overview`}>
      <div className="header-brand">PRODUCT KINGS 👑 - {name}</div>
    </Link>
    <div className="header-nav">
      <Link href={`/product/${id}/overview`}>
        <div className="header-link">Overview</div>
      </Link>
      <Link href={`/product/${id}/settings`}>
        <div className="header-link">Settings</div>
      </Link>
      <Link href={`/product/${id}/custom-logic`}>
        <div className="header-link">Custom Logic</div>
      </Link>
      <Link href={`/product/${id}/styling`}>
        <div className="header-link">Styling</div>
      </Link>
    </div>
  </div>
);

export default Header;
