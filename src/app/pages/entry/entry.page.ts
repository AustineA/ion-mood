import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewEntryComponent } from '../../components/new-entry.component';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {
  isModalOpen = false;
  presentingElement = null;
  entries = [
    {
      emoji: '😆',
      mood: 'An Awesome Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#CCFFED',
    },
    {
      emoji: '😊',
      mood: 'A Good Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#E3FEB8',
    },
    {
      emoji: '😐',
      mood: 'A Meh Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#D8E5EF',
    },
    {
      emoji: '😢',
      mood: 'A Bad Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F5DFC9',
    },
    {
      emoji: '😣',
      mood: 'An Awful Day',
      note: 'Buy and  sell everything iPhone related.',
      date: '12 Dec. 2022',
      color: '#F4C2C4',
    },
  ];
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async newEntry() {
    const modal = await this.modalCtrl.create({
      canDismiss: true,
      cssClass: 'new-entry-sheet',
      presentingElement: this.presentingElement,
      mode: 'ios',
      component: NewEntryComponent,
      componentProps: {
        modalCtrl: this.modalCtrl,
      },
    });

    await modal.present();

    const {
      data: { entry },
    } = await modal.onWillDismiss();

    if (entry) {
      this.entries = [entry, ...this.entries];
      console.log(entry);
    }
  }
}
