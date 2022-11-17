import { Form } from './components/Form';
import { InputControl } from './components/InputControl';
import { validationSchema } from './config/validationSchema';

type FormValue = {
  email: string;
};

function App() {
  return (
    <div className="App">
      <Form<FormValue, typeof validationSchema>
        id="translate-form"
        onSubmit={async (data) => {
          console.log(data);
        }}
        options={{
          reValidateMode: 'onChange',
          defaultValues: {
            email: '',
          },
        }}
        schema={validationSchema}
      >
        {({ control, formState }) => {
          return (
            <>
              <div className="rounded-lg bg-white p-10">
                <InputControl
                  placeholder="example@example.com"
                  name="email"
                  control={control}
                />
                <div className="h-5"></div>
              </div>
              <div className="mt-10 flex justify-center">
                <button type="submit">送信する</button>
              </div>
            </>
          );
        }}
      </Form>
    </div>
  );
}

export default App;
