export const addReminder = (text, dueDate) => {
  const action = {
    type: 'ADD_REMINDER',
    text,
    dueDate
  };
  console.log('adding in actions', action);
  return action;
};

export const deleteReminder = id => {
  const action = {
    type: 'DELETE_REMINDER',
    id
  };
  console.log('deleteing in actions', action);
  return action;
};

export const clearReminders = () => {
  return {
    type: 'CLEAR_REMINDERS'
  }
}
