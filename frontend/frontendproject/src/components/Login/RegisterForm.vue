<template>
    <v-container class="SignUpForm" style="height:100%">
        <form @submit.prevent="onSubmit">
            <h3 class="text-center"> Create account </h3>
            <div></div>

            <v-text-field class="pl-4 pr-4" flat solo v-model="userId" type="text" label="userId"
             prepend-icon="mid-account" :rules="rulesId"> </v-text-field>

              <v-text-field class="pl-4 pr-4" flat solo v-model="password" type="password" label="password"
             prepend-icon="mid-lock" :rules="rulesPassword"> </v-text-field>

              <v-text-field class="pl-4 pr-4" flat solo v-model="passwordCheck" type="password" label="passwordCheck"
             prepend-icon="mid-account" :rules="rules_id"> </v-text-field>

              <v-text-field class="pl-4 pr-4" flat solo v-model="email" type="text" label="email"
             prepend-icon="mid-email-multiple" :rules="rulesEmail"> </v-text-field>









        </form>
    </v-container>
</template>