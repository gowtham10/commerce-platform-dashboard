import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/images/404.png" alt="500 error" width={500} height={500} />
    </div>
  );
}
