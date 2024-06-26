import React from 'react'

const TextEditor = () => {
    const [text, setText] = useState('');

  return (
    <div>
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="10"
            cols="50"
        />
    </div>
  )
}

export default TextEditor