import React, { useState } from "react";
import {
  Container,
  Form,
  Modal,
  Button
} from "semantic-ui-react";
import { useAddUrlMutation } from "./types/operations";
import { v4 as uuidv4 } from 'uuid';


export default function NewUrl() {
    const [addUrl, setAddUrl] = useState(true);
    const [longUrl, setlongUrl] = useState("");
  
    const [AddUrlMutation] = useAddUrlMutation({

    });

    const AddUrl = () => {
        const short_url = uuidv4();

        setAddUrl(false)
        const url = {
          short_url: short_url,
          long_url: longUrl
        };
        AddUrlMutation({ variables : { url : url}})
      };
      
    const sendUrl = (
      <Modal
      onClose={()=> setAddUrl(false)}
      onOpen={()=> setAddUrl(true)}
      open={ addUrl }
      >
        <Modal.Header>Shorten the URL</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>longUrl</label>
                <input
                  placeholder="URL"
                  onChange={(e) => setlongUrl(e.target.value)}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Shorten"
            labelPosition="right"
            icon="checkmark"
            onClick={AddUrl}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  
    return (
        <Container>
            <div>
                {sendUrl}
                
            </div>
        </Container>
    )
}