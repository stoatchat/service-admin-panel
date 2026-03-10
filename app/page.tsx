import { LoginButton } from "@/components/common/auth/LoginButton";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import { Card, Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./home.module.css";

const comicNeue = Comic_Neue({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main
      className={
        styles.main + " h-[100vh] p-4 flex items-center justify-center"
      }
    >
      <Card className="p-4">
        <Flex direction="column" gap="4">
          <Heading as="h1" size="8" className={comicNeue.className}>
            Stoat Admin Panel
          </Heading>

          <LoginButton />

          <Text align="center" size="1">
            <a href="https://stoat.chat">stoat.chat</a> &middot;{" "}
            <a href="https://github.com/revoltchat/admin-panel">
              Project Information
            </a>
          </Text>
        </Flex>
      </Card>
    </main>
  );
}
