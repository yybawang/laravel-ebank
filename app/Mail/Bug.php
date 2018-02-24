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
    public $msg;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url,$msg)
    {
        //
		$this->url = $url;
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
