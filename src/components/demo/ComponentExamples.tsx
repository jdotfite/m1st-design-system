import React, { useState } from 'react';
import { Button, Input, Card, CardHeader, CardBody, CardFooter, Modal, Badge, Alert, Spinner /*, LoadingSpinner*/ } from '../ui';

export const ComponentExamples: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Component Examples</h1>
      
      {/* Button Examples */}
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Buttons</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="success">Success Button</Button>
            <Button variant="warning">Warning Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button isLoading>Loading...</Button>
          </div>
        </CardBody>
      </Card>

      {/* Input Examples */}
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Input Fields</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4 max-w-md">
            <Input
              label="Basic Input"
              placeholder="Enter some text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              label="Input with Help Text"
              placeholder="example@email.com"
              helperText="We'll never share your email with anyone else."
              type="email"
            />
            <Input
              label="Input with Error"
              placeholder="Enter your name"
              error="This field is required"
            />
            <Input
              variant="filled"
              label="Filled Variant"
              placeholder="Filled input"
            />
          </div>
        </CardBody>
      </Card>

      {/* Badge Examples */}
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Badges</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Spinner Examples */}
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Spinners</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="circle" />
              <span className="text-sm">Circle</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="dots" />
              <span className="text-sm">Dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="pulse" />
              <span className="text-sm">Pulse</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" color="primary" />
              <span className="text-sm">Large</span>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Loading Spinner Examples */}
      {/* 
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">M1st Loading Spinners</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>Logo Variant - Different Sizes</h3>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="sm" variant="logo" />
                  <span className="text-sm">Small (64px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="logo" />
                  <span className="text-sm">Medium (96px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="lg" variant="logo" />
                  <span className="text-sm">Large (128px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="logo" />
                  <span className="text-sm">Extra Large (96px)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>With Loading Text</h3>
              <div className="flex flex-wrap gap-8 items-center">
                <LoadingSpinner size="lg" variant="logo" text="Loading..." />
                <LoadingSpinner size="md" variant="logo" text="Processing transaction..." />
                <LoadingSpinner size="md" variant="simple" text="Please wait..." />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>Simple Variant (Lightweight)</h3>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="sm" variant="simple" />
                  <span className="text-sm">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="simple" />
                  <span className="text-sm">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="simple" />
                  <span className="text-sm">Large</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>Custom Animation Speed</h3>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="logo" duration={1.0} />
                  <span className="text-sm">Fast (1s)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="logo" duration={2.2} />
                  <span className="text-sm">Default (2.2s)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LoadingSpinner size="md" variant="logo" duration={4.0} />
                  <span className="text-sm">Slow (4s)</span>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      */}

      {/* Alert Examples */}
      {alertVisible && (
        <Alert
          variant="info"
          title="Information"
          closable
          onClose={() => setAlertVisible(false)}
        >
          This is an informational alert with a close button.
        </Alert>
      )}

      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Alerts</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <Alert variant="success" title="Success!">
              Your action was completed successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review the following information carefully.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred while processing your request.
            </Alert>
            <Alert variant="info">
              This is a simple info alert without a title.
            </Alert>
          </div>
        </CardBody>
      </Card>

      {/* Modal Example */}
      <Card variant="outlined">
        <CardHeader>
          <h2 className="text-xl font-semibold">Modal</h2>
        </CardHeader>
        <CardBody>
          <Button onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </CardBody>
      </Card>

      {/* Card Examples */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="default" padding="md">
          <CardHeader>
            <h3 className="text-lg font-medium">Default Card</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">This is a default card with some content.</p>
          </CardBody>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="outlined" padding="md">
          <CardHeader>
            <h3 className="text-lg font-medium">Outlined Card</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">This card has a border outline.</p>
          </CardBody>
          <CardFooter>
            <Button variant="secondary" size="sm">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="elevated" padding="md">
          <CardHeader>
            <h3 className="text-lg font-medium">Elevated Card</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">This card has a shadow elevation.</p>
          </CardBody>
          <CardFooter>
            <Button variant="secondary" size="sm">Action</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        size="md"
      >
        <div className="space-y-4">
          <p>This is an example modal dialog. You can put any content here.</p>
          <Input
            label="Name"
            placeholder="Enter your name"
          />
          <div className="flex justify-end space-x-2">
            <Button
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(false)}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ComponentExamples;
