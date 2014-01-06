'use strict';

angular.module('jiraViewerApp')
    .controller('MainCtrl', function ($scope, userRepository) {
        var i = 0;

        //Gets the data from services.js
        userRepository.getData().then(function(data){

            //Places the projects object in scope for Angular view rendering
            $scope.projects = data;
            $scope.project_tasks = [];

            //Iterates through each $scope.projects array
            $.each($scope.projects, function(){

                //Puts each project's detail into project_details variable to be iterated later.
                var project_details = this.projectDetails;

                //Iterates over project details. This will create various properties for each project
                $.each(project_details, function(){
                    var percentage_used,
                        rounded_percent,
                        now = moment(),
                        avatar = this.userAvatar,
                        task_name = this.taskName,

                    //Converts original estimates into minutes. Adjusted to days = 7.5 hours and weeks = 5 days
                        orig_taskWeeks = this.origEstimate_weeks * 2250,
                        orig_taskDays = this.origEstimate_days * 450,
                        orig_taskHours = this.origEstimate_hours * 60,
                        orig_taskMinutes = this.origEstimate_minutes,
                        task_progress = moment(this.task_in_progress);

                    //Minutes elapsed since task was in progress
                    this.elapsed_total = Math.round(now.diff(task_progress, 'minutes', true));

                    //Converts totat elapsed time into weeks, days, minutes and hours
                    var t1 = this.elapsed_total,
                        t2 = Math.floor(t1/10080),
                        t3 = t1-(t2*10080),
                        t4 = Math.floor(t3/1440),
                        t5 = t3-(t4*1440),
                        t6= Math.floor(t5/60),
                        t7= t5-(t6*60);

                    this.elapsed_weeks = t2;
                    this.elapsed_days = t4;
                    this.elapsed_hours = t6;
                    this.elapsed_minutes = t7;


                    //Adjustments for elapsed time
                    if(this.elapsed_days > 5){
                        this.elapsed_days = this.elapsed_days - 5;
                        this.elapsed_weeks = this.elapsed_weeks + 1;
                    }

                    if(this.elapsed_hours > 15){
                        this.elapsed_days = this.elapsed_days + 2;
                        this.elapsed_hours = this.elapsed_hours - 15;
                    }

                    if(this.elapsed_hours > 7 && this.elapsed_hours < 15){
                        this.elapsed_days = this.elapsed_days + 1;
                        this.elapsed_hours = this.elapsed_hours - 8;
                        this.elapsed_minutes = this.elapsed_minutes + 30;

                        if(this.elapsed_minutes > 59){
                            this.elapsed_minutes = this.elapsed_minutes -60;
                            this.elapsed_hours = this.elapsed_hours + 1;
                        }
                    }

                    //Converts total time to into minutes. Days = 7.5 Hours and Weeks = 5 Days
                    var elapsed_weeks = this.elapsed_weeks * 2250,
                        elapsed_days = this.elapsed_days * 450,
                        elapsed_hours = this.elapsed_hours * 60,
                        elapsed_minutes = this.elapsed_minutes;

                    this.calculated_elapsed_total = elapsed_weeks + elapsed_days + elapsed_hours + elapsed_minutes;         //Total number of minutes passed
                    this.orig_total = orig_taskWeeks + orig_taskDays + orig_taskHours + orig_taskMinutes;                   //Total number of minutes allocated
                    percentage_used = (((Math.round((this.calculated_elapsed_total / this.orig_total)*100)/100)) * 100);    //Percentage of time used
                    this.rounded_percent = Math.round(percentage_used);                                                     //Percentage of time rounded
                    rounded_percent = this.rounded_percent;

                    this.remaining_weeks = this.origEstimate_weeks - this.elapsed_weeks;
                    this.remaining_days = this.origEstimate_days - this.elapsed_days;
                    this.remaining_hours = this.origEstimate_hours - this.elapsed_hours;
                    this.remaining_minutes = this.origEstimate_minutes - this.elapsed_minutes;

                    //Pushes all the calculated data for each task into the project_tasks scope
                    $scope.project_tasks.push(this);
                });
            });
        });
    });


