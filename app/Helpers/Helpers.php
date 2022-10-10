<?php

function month($month){
  $month = $month * 1;
    $months = [
        '1' => 'Janeiro',
        '2' => 'Fevereiro',
        '3' => 'Março',
        '4' => 'Abril',
        '5' => 'Maio',
        '6' => 'Junho',
        '7' => 'Julho',
        '8' => 'Agosto',
        '9' => 'Setembro',
        '10' => 'Outubro',
        '11' => 'Novembro',
        '12' => 'Dezembro'
    ];

    return $months[$month];
}

function day_of_week($day){
  $day = $day * 1;
    $days = [
        '0' => 'Domingo',
        '1' => 'Segunda-feira',
        '2' => 'Terça-feira',
        '3' => 'Quarta-feira',
        '4' => 'Quinta-feira',
        '5' => 'Sexta-feira',
        '6' => 'Sábado',
    ];

    return $days[$day];
}


function only_numbers($string){
    $only_numbers = "";
    preg_match_all('!\d+!', $string, $only_numbers);
    $only_numbers = implode('',$only_numbers[0]);
    return $only_numbers;
}
