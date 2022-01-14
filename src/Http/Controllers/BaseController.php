<?php


namespace yybawang\ebank\Http\Controllers;


use Illuminate\Routing\Controller;
use yybawang\ebank\Responses\EbankResponse;

class BaseController extends Controller {
    use EbankResponse;
}
