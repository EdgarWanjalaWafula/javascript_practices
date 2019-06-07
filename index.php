    <?php 
        require_once('partials/header.php'); 
    ?>  

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card bg-light rounded-0  border-0">
                    <div class="card-body"> 
                        <h4 class="font-weight-bold text-center">Add Car Data</h4>
                        <form id="car_form">
                            
                            <!-- Form -->
                            <div class="form-group">
                                <label for="">Car Name</label>
                                <input type="text" class="form-control rounded-0" id="car_name"  placeholder="">
                            </div>

                            <div class="form-group">
                                <label for="">Model</label>
                                <input type="text" class="form-control rounded-0" id="car_model" placeholder="">
                            </div>

                            <div class="d-flex ">
                                <div class="form-group w-50">
                                    <label for="">Type</label>
                                    <select class="form-control rounded-0" id="car_type">
                                        <option>Manual</option>
                                        <option>Automatic</option>
                                        <option>Semi-Automatic</option>
                                    </select>
                                </div>
                                &nbsp; 
                                <div class="form-group w-50">
                                    <label for="">Origin</label>
                                    <select class="form-control rounded-0" id="car_origin">
                                        <option>Japan</option>
                                        <option>Malaysia</option>
                                        <option>USA</option>
                                        <option>France</option>
                                    </select>
                                </div>
                            </div>
                            &nbsp; 
                            <button id="saveCarData" type="submit" class="btn rounded-0 border-0 w-100 btn-secondary py-2 font-weight-bold">SUBMIT</button>
                        </form>


                        <!-- Result  -->
                        <p class="m-0" id="error"></p>
                    </div> 
                </div>
            </div>

            <div class="col-md-6">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Car No</th>
                            <th>Name </th>
                            <th>Model</th>
                            <th>Type</th>
                            <th>Origin</th>
                        </tr>
                    </thead>
                    <tbody id="result">
                        
                    </tbody>
                </table>
            </div> 
        </div>
    </div>

    <!-- Footer  -->
    <?php 
        require_once('partials/footer.php'); 
    ?> 