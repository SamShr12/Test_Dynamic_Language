import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="fi">
          In Finnish
        </Link>
        |{" "}
        <Link href={`/`} locale="jp">
          In Japanese
        </Link>
        <br />
        <br />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <p>{t("title")}</p>
        <p>{t("subtitle")}</p>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <br />
        <AlertMessage message={t("alertMessage")} />
      </div>
    </div>
  );
}
