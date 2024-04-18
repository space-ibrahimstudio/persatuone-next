import React, { useEffect } from "react";
import { scrollToSection, scrollToElement } from "@/utils/handler";
import styles from "@/styles/Home.module.css";

export function Footer({ componentId }) {
  const igLink = () => {
    const link = "https://www.instagram.com/persatu.one";
    window.open(link, "_blank");
  };

  const liLink = () => {
    const link = "https://www.linkedin.com/company/persatu-one-indonesia";
    window.open(link, "_blank");
  };

  const fbLink = () => {
    const link = "https://www.facebook.com/profile.php?id=100083610881443";
    window.open(link, "_blank");
  };

  useEffect(() => {
    const svg = document.getElementById("facebook-icons");
    svg.setAttribute(
      "width",
      getComputedStyle(document.documentElement).getPropertyValue("--pixel-18")
    );
  }, []);

  useEffect(() => {
    const svg = document.getElementById("instagram-icons");
    svg.setAttribute(
      "width",
      getComputedStyle(document.documentElement).getPropertyValue("--pixel-18")
    );
  }, []);

  useEffect(() => {
    const svg = document.getElementById("linkedin-icons");
    svg.setAttribute(
      "width",
      getComputedStyle(document.documentElement).getPropertyValue("--pixel-18")
    );
  }, []);

  return (
    <footer id={componentId} className={styles.footer}>
      <div className={styles.footerNav}>
        <div
          className={styles.footerLogo}
          onClick={() => scrollToSection("hero-section")}
        >
          <img
            className={styles.footerLogoImg}
            loading="lazy"
            alt={componentId}
            src="/svg/logo.svg"
          />
        </div>
        <div className={styles.footerMenu}>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>About us</h1>
            <h2
              onClick={() => scrollToSection("about-us")}
              className={styles.footerMenuLink}
            >
              Who we are
            </h2>
            <h2
              onClick={() => scrollToElement("factory-section")}
              className={styles.footerMenuLink}
            >
              Factory
            </h2>
            <h2
              onClick={() => scrollToElement("facility-section")}
              className={styles.footerMenuLink}
            >
              Our facilities
            </h2>
            <h2
              onClick={() => scrollToElement("why-section")}
              className={styles.footerMenuLink}
            >
              Why choose us
            </h2>
            <h2
              onClick={() => scrollToSection("gallery-showcase")}
              className={styles.footerMenuLink}
            >
              Gallery
            </h2>
          </div>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>Products & Brands</h1>
            <h2
              onClick={() => scrollToSection("our-products")}
              className={styles.footerMenuLink}
            >
              Cocoa
            </h2>
            <h2
              onClick={() => scrollToElement("coffee-section")}
              className={styles.footerMenuLink}
            >
              Coffee
            </h2>
            <h2
              onClick={() => scrollToElement("certi-section")}
              className={styles.footerMenuLink}
            >
              Certifications
            </h2>
            <h2
              onClick={() => scrollToSection("our-brands")}
              className={styles.footerMenuLink}
            >
              Cartenz Cocoa Powder
            </h2>
            <h2
              onClick={() => scrollToElement("celco-section")}
              className={styles.footerMenuLink}
            >
              Celebes Coffee
            </h2>
          </div>
          <div className={styles.footerMenuWrapper}>
            <h1 className={styles.footerMenuTitle}>Socials</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--pixel-10)",
              }}
            >
              <svg
                id="facebook-icons"
                height="100%"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9846 8.5445C16.9846 3.82556 13.1829 0 8.49319 0C3.80168 0.000884523 0 3.82556 0 8.54538C0 12.8088 3.10556 16.3442 7.16464 16.9846V11.0141H5.00994V8.54627H7.16641V6.66223C7.16641 4.5208 8.43481 3.33819 10.3746 3.33819C11.3033 3.33819 12.2754 3.50448 12.2754 3.50448V5.60611H11.2051C10.1508 5.60611 9.82175 6.26508 9.82175 6.94174V8.5445H12.1755L11.7995 11.0132H9.81998V16.9837C13.8799 16.3425 16.9846 12.8088 16.9846 8.5445Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className={styles.footerMenuLink} onClick={fbLink}>
                Persatu.one
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--pixel-10)",
              }}
            >
              <svg
                id="instagram-icons"
                height="100%"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99792 0C6.69311 0 6.40352 0.01104 5.49824 0.0509538C4.59296 0.0934153 3.97557 0.235237 3.43546 0.445846C2.86875 0.659107 2.35546 0.993572 1.93147 1.42586C1.49946 1.85007 1.16504 2.3633 0.951462 2.92985C0.740852 3.46911 0.598181 4.0865 0.556569 4.98923C0.516655 5.89706 0.505615 6.1858 0.505615 8.49316C0.505615 10.7988 0.516655 11.0876 0.556569 11.9928C0.599031 12.8981 0.740852 13.5147 0.951462 14.0548C1.16506 14.6213 1.49948 15.1345 1.93147 15.5588C2.35494 15.9913 2.86801 16.3258 3.43461 16.5388C3.97557 16.7485 4.59126 16.8921 5.4957 16.9337C6.40267 16.9736 6.69141 16.9846 8.99792 16.9846C11.3044 16.9846 11.5923 16.9744 12.4985 16.9337C13.402 16.8912 14.0211 16.7485 14.5621 16.5388C15.1285 16.3255 15.6415 15.991 16.0652 15.5588C16.4969 15.1344 16.831 14.6212 17.0444 14.0548C17.2533 13.5147 17.3968 12.8973 17.4393 11.9928C17.4792 11.0876 17.4902 10.7988 17.4902 8.49231C17.4902 6.1858 17.48 5.89706 17.4393 4.99008C17.3968 4.0865 17.2533 3.46911 17.0444 2.92985C16.8309 2.36327 16.4964 1.85004 16.0644 1.42586C15.6405 0.993401 15.1272 0.65891 14.5604 0.445846C14.0194 0.235237 13.4012 0.0925661 12.4976 0.0509538C11.5915 0.01104 11.3036 0 8.99623 0H8.99792ZM8.23701 1.53116H8.99792C11.2654 1.53116 11.5346 1.53796 12.4288 1.57957C13.2568 1.61694 13.7069 1.75621 14.0067 1.8717C14.4024 2.02542 14.6861 2.21055 14.9833 2.50693C15.2805 2.80416 15.464 3.08695 15.6177 3.48355C15.7349 3.78247 15.8724 4.23257 15.9098 5.06057C15.9514 5.95481 15.9599 6.22401 15.9599 8.49061C15.9599 10.7564 15.9514 11.0264 15.9098 11.9215C15.8724 12.7487 15.734 13.1979 15.6177 13.4977C15.4817 13.8664 15.2646 14.1999 14.9825 14.4734C14.7085 14.7554 14.3748 14.9722 14.0058 15.1078C13.7086 15.2242 13.2585 15.3626 12.4288 15.4008C11.5346 15.4407 11.2654 15.4509 8.99792 15.4509C6.73048 15.4509 6.46127 15.4416 5.56618 15.4008C4.73818 15.3626 4.28894 15.2242 3.99001 15.1078C3.62116 14.972 3.28744 14.7552 3.01339 14.4734C2.73076 14.1996 2.51312 13.8659 2.37647 13.4968C2.26098 13.1979 2.1217 12.7478 2.08434 11.9198C2.04442 11.0247 2.03593 10.7564 2.03593 8.48806C2.03593 6.22062 2.04442 5.95311 2.08434 5.05802C2.12255 4.23002 2.26098 3.77993 2.37732 3.481C2.53103 3.08526 2.71616 2.80161 3.01339 2.50438C3.28722 2.22214 3.62099 2.00505 3.99001 1.86916C4.28894 1.75281 4.73818 1.61439 5.56618 1.57617C6.35002 1.5405 6.6532 1.52946 8.23616 1.52862V1.53116H8.23701ZM13.532 2.94089C13.2617 2.94089 13.0025 3.04825 12.8114 3.23937C12.6203 3.43048 12.5129 3.68969 12.5129 3.95996C12.5129 4.23024 12.6203 4.48945 12.8114 4.68056C13.0025 4.87167 13.2617 4.97904 13.532 4.97904C13.8022 4.97904 14.0615 4.87167 14.2526 4.68056C14.4437 4.48945 14.551 4.23024 14.551 3.95996C14.551 3.68969 14.4437 3.43048 14.2526 3.23937C14.0615 3.04825 13.8022 2.94089 13.532 2.94089ZM8.99792 4.13151C7.84114 4.11349 6.72458 4.55574 5.89387 5.36097C5.06316 6.16619 4.58635 7.26844 4.56834 8.42522C4.55032 9.582 4.99257 10.6986 5.79779 11.5293C6.60302 12.36 7.70527 12.8368 8.86205 12.8548C10.0188 12.8728 11.1354 12.4306 11.9661 11.6254C12.7968 10.8201 13.2736 9.71788 13.2916 8.5611C13.3097 7.40432 12.8674 6.28775 12.0622 5.45705C11.257 4.62634 10.1547 4.14953 8.99792 4.13151ZM8.99792 5.66097C9.36974 5.66097 9.73792 5.73421 10.0814 5.8765C10.4249 6.01878 10.7371 6.22734 11 6.49025C11.2629 6.75317 11.4714 7.06529 11.6137 7.4088C11.756 7.75232 11.8293 8.12049 11.8293 8.49231C11.8293 8.86413 11.756 9.2323 11.6137 9.57581C11.4714 9.91933 11.2629 10.2315 11 10.4944C10.7371 10.7573 10.4249 10.9658 10.0814 11.1081C9.73792 11.2504 9.36974 11.3236 8.99792 11.3236C8.24701 11.3236 7.52685 11.0253 6.99587 10.4944C6.46489 9.96339 6.16659 9.24323 6.16659 8.49231C6.16659 7.74139 6.46489 7.02123 6.99587 6.49025C7.52685 5.95927 8.24701 5.66097 8.99792 5.66097Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className={styles.footerMenuLink} onClick={igLink}>
                @persatu.one
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--pixel-10)",
              }}
            >
              <svg
                id="linkedin-icons"
                height="100%"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.685 0.125H1.66271C0.842427 0.125 0.125 0.716428 0.125 1.52643V16.583C0.125 17.3981 0.842427 18.125 1.66271 18.125H16.6807C17.5061 18.125 18.125 17.393 18.125 16.5821V1.52728C18.1301 0.716427 17.5061 0.125857 16.685 0.125857V0.125ZM5.70499 15.1293H3.12499V7.1107H5.70499V15.1293ZM4.50499 5.89185H4.48614C3.66071 5.89185 3.12671 5.27813 3.12671 4.50928C3.12671 3.72499 3.67528 3.12499 4.51871 3.12499C5.36213 3.12499 5.87899 3.72071 5.89699 4.50842C5.89699 5.27728 5.36213 5.89099 4.50414 5.89099L4.50499 5.89185ZM15.1293 15.1293H12.5501V10.745C12.5501 9.69498 12.1747 8.9767 11.2421 8.9767C10.529 8.9767 10.1073 9.45927 9.91955 9.92898C9.84927 10.0978 9.83041 10.3276 9.83041 10.5624V15.1293H7.25213V7.1107H9.83041V8.22584C10.2058 7.69184 10.7921 6.92299 12.1558 6.92299C13.8487 6.92299 15.1293 8.03813 15.1293 10.4441V15.1293Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className={styles.footerMenuLink} onClick={liLink}>
                Persatu One Indonesia
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerFooter}>
        <h1 className={styles.footerMenuLink}>
          © 2024 Persatu.one. All right reserved.
        </h1>
        <div className={styles.footerPptnc}>
          <h2 className={styles.footerMenuLink}>Privacy Policy</h2>
          <h2 className={styles.footerMenuLink}>Terms and Conditions</h2>
        </div>
      </div>
    </footer>
  );
}
