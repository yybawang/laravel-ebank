<div>
	<p>
		[env:{{config('app.env')}}]{{time2date()}}
	</p>
	
	<div>
		@foreach($notices as $v)
			<pre>{{ print_r($v,true)}}</pre>
		@endforeach
	</div>
</div>
