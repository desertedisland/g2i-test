**CardsActions**

'Cards' are quiz objects as retrieved from the api at https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean.

e.g. 

```javascript
{
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    }
```

**Redux actions related to 'cards' / quiz questions:**

setWorking()
- Update the cards store with notification that network request has
    - started
    - stopped
    
setCommsError()
- Update the cards store with notification that a comms error has occurred

addCards()
- Add a list of cards to the cards store (usually in response to an api request)

resetCards()
- Remove all cards from the cards store and reset to default state

getCardsRequest() 
- Makes a GET request to the opentdb API
- Calls setWorking() action at start of request  
- Calls addCards() action with resulting data
- Handles network errors by calling setCommsError
- Calls setWorking() action at end of request
