import {useState} from 'react'
import {
  BgContainer,
  InnerContainer,
  Heading,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PassWordValidator = () => {
  const [validate, setValidate] = useState('')

  const validPassword = validate.length > 8

  return (
    <BgContainer>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <Input
          type="password"
          value={validate}
          onChange={e => setValidate(e.target.value)}
        />
        {!validPassword && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </InnerContainer>
    </BgContainer>
  )
}

export default PassWordValidator
