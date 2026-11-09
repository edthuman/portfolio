import {
  _React,
  AwsCloudwatch,
  AwsEventbridge,
  AwsLambda,
  AwsS3,
  AwsSecretsManager,
  AwsSns,
  AwsSqs,
  ClaudeCode,
  CodexIcon,
  Css,
  CursorIcon,
  Datagrip,
  DockerIcon,
  Express,
  FirebaseIcon,
  Git,
  GithubIcon,
  Html5,
  Javascript,
  Jest,
  Lighthouse,
  MongodbIcon,
  Nestjs,
  NodejsIcon,
  Oauth,
  Postgresql,
  PostmanIcon,
  Redux,
  Sass,
  SentryIcon,
  TailwindIcon,
  TypescriptIcon,
  VisualStudioCode,
  Xcode,
} from "@dev.icons/react";
import "./Technologies.css";
import TechIcon from "./TechPage/TechIcon/TechIcon";
import TechPage from "./TechPage/TechPage";
import TechTitlePage from "./TechTitlePage/TechTitlePage";
import TypeOrmIcon from "./TypeORM/TypeORM";

function Technologies() {
  return (
    <section id="technologies" className="page" tabIndex={0}>
      <TechTitlePage />

      <TechPage name="Languages">
        <TechIcon name="JavaScript" icon={Javascript} />
        <TechIcon name="TypeScript" icon={TypescriptIcon} />
        <TechIcon name="SQL" />
      </TechPage>

      <TechPage name="Development Tools">
        <TechIcon name="Claude Code" icon={ClaudeCode} />
        <TechIcon name="Codex" icon={CodexIcon} />
        <TechIcon name="Cursor" icon={CursorIcon} />
        <TechIcon name="DataGrip" icon={Datagrip} />
        <TechIcon name="Git" icon={Git} />
        <TechIcon name="GitHub" icon={GithubIcon} />
        <TechIcon name="VS Code" icon={VisualStudioCode} />
        <TechIcon name="XCode" icon={Xcode} />
        <TechIcon name="Docker" icon={DockerIcon} />
        <TechIcon name="Postman" icon={PostmanIcon} />
        <TechIcon name="Sentry" icon={SentryIcon} />
      </TechPage>

      <TechPage name="Backend">
        <TechIcon name="Express" icon={Express} />
        <TechIcon name="Firebase Authentication" icon={FirebaseIcon} />
        <TechIcon name="Firebase Realtime Database" icon={FirebaseIcon} />
        <TechIcon name="MongoDB" icon={MongodbIcon} />
        <TechIcon name="NestJS" icon={Nestjs} />
        <TechIcon name="NodeJS" icon={NodejsIcon} />
        <TechIcon name="OAuth" icon={Oauth} />
        <TechIcon name="PostgreSQL" icon={Postgresql} />
        <TechIcon name="TypeORM" icon={TypeOrmIcon} />
      </TechPage>

      <TechPage name="Frontend">
        <TechIcon name="CSS" icon={Css} />
        <TechIcon name="HTML5" icon={Html5} />
        <TechIcon name="React" icon={_React} />
        <TechIcon name="React Native" icon={_React} />
        <TechIcon name="Redux" icon={Redux} />
        <TechIcon name="SASS" icon={Sass} />
        <TechIcon name="Tailwind" icon={TailwindIcon} />
      </TechPage>

      <TechPage name="Cloud">
        <TechIcon name="Cloudwatch" icon={AwsCloudwatch} />
        <TechIcon name="EventBridge" icon={AwsEventbridge} />
        <TechIcon name="Lambda" icon={AwsLambda} />
        <TechIcon name="S3" icon={AwsS3} />
        <TechIcon name="Secrets Manager" icon={AwsSecretsManager} />
        <TechIcon name="SNS" icon={AwsSns} />
        <TechIcon name="SQS" icon={AwsSqs} />
      </TechPage>

      <TechPage name="Testing">
        <TechIcon name="Jest" icon={Jest} />
        <TechIcon name="Lighthouse" icon={Lighthouse} />
        <TechIcon name="Supertest" />
      </TechPage>
    </section>
  );
}

export default Technologies;
