import { LoginButton } from "@/components/common/auth/LoginButton";

import { Card, Flex, Heading, Text } from "@radix-ui/themes";

import styles from "./home.module.css";

export default function Home() {
  return (
    <main
      className={
        styles.main + " h-[100vh] p-4 flex items-center justify-center"
      }
    >
      <Card className="p-4">
        <Flex direction="column" gap="4">
          <Heading as="h1" size="8">
            Revolt Admin Panel
          </Heading>

          <LoginButton />

          <Text align="center" size="1">
            <a href="https://revolt.chat">revolt.chat</a> &middot;{" "}
            <a href="https://git.is.horse/revolt/research-development/swiss-army-knife">
              Project Information
            </a>
          </Text>
        </Flex>
      </Card>
    </main>
  );
}
