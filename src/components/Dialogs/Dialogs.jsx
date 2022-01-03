import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ messages, dialogs }) => {
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
