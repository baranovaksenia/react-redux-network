import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Heo" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Jonb" },
    { id: 5, name: "Viky" },
  ];

  let messages = [
    { id: 1, message: "I work in an office" },
    { id: 2, message: "A compassionate world" },
    { id: 3, message: "My life is a crazy explosion" },
    { id: 4, message: "Full time student and rockin' it!" },
    { id: 5, message: "I am always helping out - Kindness" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogItems}>{dialogsElements}</div>
        <div className={style.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
