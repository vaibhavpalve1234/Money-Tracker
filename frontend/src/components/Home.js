

import { Link } from "react-router-dom";
export default function BaseHome() {
  return (
    <div className="base-home">
      <h1 className="base-brand">🤖 myMoney</h1>
      <h1 className="base-welcome">Welcome User!</h1>
      <h2 className="base-head">This App lets you keep track of your transactions!!</h2>
      <p>Please <a href="/Login">Login</a> or <a href="/Sign-up">Register</a> to Track Your Money Pocket</p>
    </div>
  );
}
