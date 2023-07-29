import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
} from '@ionic/react';

const GroceryList: React.FC = () => {
  const [groceries, setGroceries] = useState<{ name: string; quantity: string }[]>([]);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemQuantity, setNewItemQuantity] = useState<string>('');
  const [editItemIndex, setEditItemIndex] = useState<number | null>(null);
  const [editItemName, setEditItemName] = useState<string>('');
  const [editItemQuantity, setEditItemQuantity] = useState<string>('');

  const handleAdd = () => {
    if (newItemName.trim() !== '') {
      setGroceries((prevGroceries) => [
        ...prevGroceries,
        { name: newItemName.trim(), quantity: newItemQuantity.trim() },
      ]);
      setNewItemName('');
      setNewItemQuantity('');
    }
  };

  const handleEdit = (index: number, item: { name: string; quantity: string }) => {
    setEditItemIndex(index);
    setEditItemName(item.name);
    setEditItemQuantity(item.quantity);
  };

  const handleSaveEdit = () => {
    if (editItemName.trim() !== '') {
      setGroceries((prevGroceries) =>
        prevGroceries.map((item, index) =>
          index === editItemIndex
            ? { name: editItemName.trim(), quantity: editItemQuantity.trim() }
            : item
        )
      );
      setEditItemIndex(null);
      setEditItemName('');
      setEditItemQuantity('');
    }
  };

  const handleCancelEdit = () => {
    setEditItemIndex(null);
    setEditItemName('');
    setEditItemQuantity('');
  };

  const handleDelete = (index: number) => {
    setGroceries((prevGroceries) =>
      prevGroceries.filter((_, i) => i !== index)
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          {groceries.map((item, index) => (
            <IonItem key={index}>
              {editItemIndex === index ? (
                <>
                  <IonInput
                    value={editItemName}
                    onIonChange={(e) => setEditItemName(e.detail.value!)}
                  />
                  <IonInput
                    value={editItemQuantity}
                    onIonChange={(e) => setEditItemQuantity(e.detail.value!)}
                  />
                  <IonButton onClick={handleSaveEdit}>Save</IonButton>
                  <IonButton onClick={handleCancelEdit}>Cancel</IonButton>
                </>
              ) : (
                <>
                  <IonLabel>{item.name}</IonLabel>
                  <IonLabel>Quantity: {item.quantity}</IonLabel>
                  <IonButton onClick={() => handleEdit(index, item)}>Edit</IonButton>
                  <IonButton onClick={() => handleDelete(index)}>Delete</IonButton>
                </>
              )}
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            value={newItemName}
            placeholder="Add new item..."
            onIonChange={(e) => setNewItemName(e.detail.value!)}
          />
          <IonInput
            value={newItemQuantity}
            placeholder="Quantity..."
            onIonChange={(e) => setNewItemQuantity(e.detail.value!)}
          />
          <IonButton onClick={handleAdd}>Add</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default GroceryList;
