// import { Doctor } from "../model/doctor";

angular.
  module('doctorModule').
  component('doctorList', {
    templateUrl: 'doctor/doctor-list/doctor-list.component.html',
    controller: function DoctorListController() {
      this.doctors = [
        // Doctor(name='Dr. August Margin'),
        {name: 'Dr. August Margin'},
        {
          name: 'Dr. Joaquis Lupus',
        }, {
          name: 'Dr. Xaviers Charles',
        }
      ];
    }
  });
  