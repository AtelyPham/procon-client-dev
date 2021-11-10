import copy from "copy-to-clipboard"
import React, { useState } from "react"
import { Button, Card, Form } from "react-bulma-components"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { successNotify } from "../../common/notifications"

export const TeamInfo = ({ text, token, teamId }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [isCopy, setIsCopy] = useState(false)

  const handleCopy = text => {
    if (isCopy) {
      return
    }

    setIsCopy(true)
    successNotify("👍🏻 Copied to clipboard!")
    copy(text || "")
    setTimeout(() => setIsCopy(false), 3000)
  }

  return (
    <Card
      style={{
        minWidth: "400px",
      }}
      mb="2"
    >
      <Card.Header>
        <Card.Header.Title>{text}</Card.Header.Title>
        <Card.Header.Icon onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </Card.Header.Icon>
      </Card.Header>
      {isOpen && (
        <>
          <Card.Content>
            <Form.Label>Token</Form.Label>
            <Form.Input type="text" value={token} readOnly={true} />
            <Form.Label className="mt-3">Team ID</Form.Label>
            <Form.Input type="text" value={teamId} readOnly={true} />
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item justifyContent="flex-start">
              <Button.Group>
                <Button
                  color="info"
                  inverted={true}
                  onClick={() => handleCopy(token)}
                  disabled={isCopy}
                >
                  Copy token
                </Button>
                <Button
                  color="info"
                  inverted={true}
                  onClick={() => handleCopy(teamId)}
                  disabled={isCopy}
                >
                  Copy team id
                </Button>
              </Button.Group>
            </Card.Footer.Item>
          </Card.Footer>
        </>
      )}
    </Card>
  )
}

export default TeamInfo
