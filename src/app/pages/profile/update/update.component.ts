import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cheque } from 'src/app/service-components/cheque';
import { ChequeService } from 'src/app/service-components/cheque.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  cheque!: Cheque;
  submitted = false ;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ChequeService: ChequeService) { }

  ngOnInit(): void {
    this.cheque = new Cheque();
    this.submitted = false ;
    this.id = this.route.snapshot.params['id'];

    //this.ChequeService.getCheque(this.id)
      //.subscribe(data => {
        //console.log(data)
       // this.cheque = data;
      //})
  }

  updateCheque(){
    this.ChequeService.updateCheque(this.id, this.cheque)
      .subscribe(data => {
        console.log(data);
        this.cheque = new Cheque();
        this.goToList();
      })
  }

  onSubmit(){
    this.submitted = true;
    this.updateCheque();
  }

  goToList(){ 
    this.router.navigate(['profile/cheques']);
  }

}
