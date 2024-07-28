export default function  Mailbox({ username, messages }) {
    return (
        <>
            <p>Hello {username}</p>
            {/* {messages.length > 0 && (
        <p>You have {messages.length} unread messages</p>
      )} */}
            <p>
                {messages.length > 0
                    ? `You have ${messages.length} unread messages`
                    : "No unread messages"}
            </p>
            <p
                style={{
                    margin: 8,
                    padding: "12px 16px",
                    borderRadius: 4,
                    backgroundColor: "gray",
                    color: "white",
                }}
            >
                Please update your email!
            </p>
        </>
    );
}
