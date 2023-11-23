import { AuthContainer, Section } from "./Authentication.styles";

export function Authentication() {
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Logar</h2>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
      </Section>
    </AuthContainer>
  );
}
