import { useState } from "react";

interface futureObj {
  title: string;
  imge: string;
}

const fetchCall = (props: futureObj) => {
  const [myObj, setMyObj] = useState<futureObj | null>;
  return <>{myObj && <p> Read the news!</p>}</>;
};

export default fetchCall;
