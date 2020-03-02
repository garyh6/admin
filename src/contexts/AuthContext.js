import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export default props => {
  const { children } = props;
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const verifyUser = async () => {
    try {
      const verified = await fetch("http://localhost:4000/api/user/verify");
      setAuthenticated(verified.ok || false);
      setLoading(false);
    } catch (err) {
      console.log("************ verify err", err);
      setAuthenticated(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyUser();
  });

  const defaultContext = {
    authenticated,
    setAuthenticated
  };

  // TODO there's a loading flash

  return (
    <AuthContext.Provider value={defaultContext}>
      {loading ? <div>Loading</div> : children}
    </AuthContext.Provider>
  );
};
