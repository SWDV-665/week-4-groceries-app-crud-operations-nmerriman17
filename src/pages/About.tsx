import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonItem, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<p></p>
        <IonItem>
          <IonLabel><strong> Nicole Merriman</strong></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel> Student ID: 0693752</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
);

};
export default About;
  
