"use client";

import React, { useState, useEffect } from "react";

export const ClientOnly = ({ children }) => {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  });

  return clientReady ? <React.Fragment>{children}</React.Fragment> : null;
};
