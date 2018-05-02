<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Bug extends Mailable
{
    use Queueable, SerializesModels;

    public $url;
    public $database;
    public $get;
    public $post;
    public $request;
    public $server;
    public $cookie;
    public $session;
    public $msg;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url,$database,$get,$post,$request,$server,$cookie,$session,$msg)
    {
        //
		$this->url = $url;
		$this->database = $database;
		$this->get = $get;
		$this->post = $post;
		$this->request = $request;
		$this->server = $server;
		$this->cookie = $cookie;
		$this->session = $session;
		$this->msg = $msg;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.bug');
    }
}
